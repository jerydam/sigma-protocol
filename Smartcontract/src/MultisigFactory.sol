// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./multisig.sol";
import "./wallet.sol";

contract MultiSigFactory {
    // ============ EVENTS ============
    event MultiSigCreated(
        address indexed controller,
        address indexed companyWallet,
        address indexed deployer,
        string name,
        address[] owners,
        uint256 requiredPercentage,
        uint256 timelockPeriod,
        uint256 expiryPeriod,
        uint256 minOwners
    );

    event MultiSigNameChanged(address indexed controller, string oldName, string newName);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // ============ STATE ============
    address public owner;
    address[] public allControllers;
    address[] public allWallets;
    
    mapping(address => string) public multiSigNames;

    // ============ MODIFIERS ============
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // ============ CONSTRUCTOR ============
    constructor() {
        owner = msg.sender;
    }

    // ============ OWNERSHIP ============
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // ============ FACTORY FUNCTION ============
    /**
     * @dev Creates a new MultiSig instance with CompanyWallet
     * @param _name Name of the MultiSig
     * @param _initialOwners List of initial owner addresses
     * @param _initialNames List of owner names
     * @param _initialPercentages List of owner percentages (1-100)
     * @param _initialRemovable Whether each owner is removable
     * @param _requiredPercentage Required % to confirm transactions
     * @param _timelockPeriod Delay after confirmation before execution
     * @param _expiryPeriod Time after which transaction expires
     * @param _minOwners Minimum number of owners allowed
     * @return controller Address of deployed MultiSigWalletController
     * @return companyWallet Address of deployed CompanyWallet
     */
    function createMultiSig(
        string calldata _name,
        address[] calldata _initialOwners,
        string[] calldata _initialNames,
        uint256[] calldata _initialPercentages,
        bool[] calldata _initialRemovable,
        uint256 _requiredPercentage,
        uint256 _timelockPeriod,
        uint256 _expiryPeriod,
        uint256 _minOwners
    ) external onlyOwner returns (address controller, address companyWallet) {
        // Input validation
        require(bytes(_name).length > 0, "Empty name");
        require(_initialOwners.length >= 2, "Min 2 owners");
        require(
            _initialOwners.length == _initialNames.length &&
            _initialOwners.length == _initialPercentages.length &&
            _initialOwners.length == _initialRemovable.length,
            "Array length mismatch"
        );
        require(_requiredPercentage > 0 && _requiredPercentage <= 100, "Invalid req%");
        require(_minOwners >= 2, "minOwners >= 2");
        require(_expiryPeriod > 0, "expiry > 0");

        // Deploy CompanyWallet
        CompanyWallet wallet = new CompanyWallet(address(this));
        companyWallet = address(wallet);
        allWallets.push(companyWallet);

        // Deploy MultiSigWalletController
        MultiSigWalletController ctrl = new MultiSigWalletController(
            companyWallet,
            _name,
            _initialOwners,
            _initialNames,
            _initialPercentages,
            _initialRemovable,
            _requiredPercentage,
            _timelockPeriod,
            _expiryPeriod,
            _minOwners
        );
        controller = address(ctrl);
        allControllers.push(controller);

        // Transfer ownership of CompanyWallet to Controller
        wallet.setController(controller);

        // Store the MultiSig name
        multiSigNames[controller] = _name;

        // Emit event
        emit MultiSigCreated(
            controller,
            companyWallet,
            msg.sender,
            _name,
            _initialOwners,
            _requiredPercentage,
            _timelockPeriod,
            _expiryPeriod,
            _minOwners
        );

        return (controller, companyWallet);
    }

    // ============ VIEW FUNCTIONS ============
    function getAllControllers() external view returns (address[] memory) {
        return allControllers;
    }

    function getAllWallets() external view returns (address[] memory) {
        return allWallets;
    }

    function getDeploymentCount() external view returns (uint256 controllers, uint256 wallets) {
        return (allControllers.length, allWallets.length);
    }

    function getMultiSigName(address controller) external view returns (string memory) {
        return multiSigNames[controller];
    }

    function getMultiSigInfo(address controller) external view returns (
        string memory name,
        address wallet,
        bool exists
    ) {
        name = multiSigNames[controller];
        exists = false;
        for (uint256 i = 0; i < allControllers.length; i++) {
            if (allControllers[i] == controller) {
                exists = true;
                wallet = allWallets[i];
                break;
            }
        }
    }

    // ============ EMERGENCY WITHDRAW (ETH & ERC20) ============
    function rescueETH(uint256 amount) external onlyOwner {
        payable(owner).transfer(amount);
    }

    function rescueToken(address token, uint256 amount) external onlyOwner {
        IERC20(token).transfer(owner, amount);
    }

    receive() external payable {}
}