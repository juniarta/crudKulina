const firebase = require('../helpers/firebase');

module.exports = {
  createUser: async (ctx) => {
    const create = await firebase
      .auth()
      .createUserWithEmailAndPassword(ctx.request.body.email, ctx.request.body.password);
    await firebase.auth().currentUser.sendEmailVerification();
    // await emailVerified.sendEmailVerification();
    ctx.res.ok(create);
  },

  siginUser: async (ctx) => {
    const login = await firebase
      .auth()
      .signInWithEmailAndPassword(ctx.request.body.email, ctx.request.body.password);
    ctx.res.ok(login);
  },

  cekAuthState: async (ctx) => {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return ctx.res.ok(user);
      }
      return ctx.res.unauthorized();
    });
  },
};
