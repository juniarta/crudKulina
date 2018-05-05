const firebase = require(`../helpers/firebase`);
module.exports = {
  createUser: async (ctx, next) => {
    const create = await firebase.auth().createUserWithEmailAndPassword(ctx.request.body.email, ctx.request.body.password);
    const emailVerified = await firebase.auth().currentUser;
    await emailVerified.sendEmailVerification();
    ctx.res.ok(create);
  },

  siginUser: async (ctx, next) => {
    const login = await firebase.auth().signInWithEmailAndPassword(ctx.request.body.email, ctx.request.body.password);
    ctx.res.ok(login);
  },
};
