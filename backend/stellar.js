const StellarSdk = require('stellar-sdk');
const config = require('./config');
const server = new StellarSdk.Server(config.server);
const sourceKeypair = StellarSdk.Keypair.fromSecret(config.sourceSecretKey);

const loadAccount = async () => {
  try {
    const account = await server.loadAccount(config.sourcePublicKey);
    return account;
  } catch (error) {
    console.error('Error loading account:', error);
  }
};

const submitComplaint = async (complaintDetails) => {
  try {
    const account = await loadAccount();
    const transaction = new StellarSdk.TransactionBuilder(account, {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: StellarSdk.Networks.TESTNET
    })
    .addOperation(StellarSdk.Operation.manageData({
      name: 'complaint',
      value: JSON.stringify(complaintDetails)
    }))
    .setTimeout(30)
    .build();

    transaction.sign(sourceKeypair);

    const transactionResult = await server.submitTransaction(transaction);
    console.log('Transaction successful:', transactionResult);
  } catch (error) {
    console.error('Error submitting transaction:', error);
  }
};

const updateComplaintStatus = async (complaintId, newStatus) => {
  try {
    const account = await loadAccount();
    const transaction = new StellarSdk.TransactionBuilder(account, {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: StellarSdk.Networks.TESTNET
    })
    .addOperation(StellarSdk.Operation.manageData({
      name: `complaint_${complaintId}_status`,
      value: newStatus
    }))
    .setTimeout(30)
    .build();

    transaction.sign(sourceKeypair);

    const transactionResult = await server.submitTransaction(transaction);
    console.log('Transaction successful:', transactionResult);
  } catch (error) {
    console.error('Error updating transaction:', error);
  }
};

module.exports = {
  submitComplaint,
  updateComplaintStatus
};
