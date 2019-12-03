const mongoose = require('mongoose');
// mongoose is an odm
const connectionString = 'mongodb://localhost/mern';
// blog
// second argument, options object, we set
// certain properties to true or false to do thing
// things that we are doing is silencing depraction warnings
// and setting for the transition of the mongoose module from
// one version to another
mongoose.connect(connectionString, { useNewUrlParser: true,
                                     useUnifiedTopology: true,
                                     useCreateIndex: true,
                                     useFindAndModify: false
                                    });


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ', err);
});