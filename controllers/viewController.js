exports.getOverview = async (req, res, next) => {
  // res.status(200).json({
  //   data: 'Hey I got it',
  // });
  res.status(200).render('overview');
};

exports.getShop = async (req, res, next) => {
  res.status(200).render('shop');
};
exports.getLogin = async (req, res, next) => {
  res.status(200).render('login', {
    age: 16
  });
};

exports.getMyAccount = async (req, res, next) => {
  res.status(200).json({
    data: 'Your account',
  });
};
