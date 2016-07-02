// module.exports = {
//   rules: [
//     {
//       pattern: /\/api\/getLivelist.php\?rtype=origin$/,
//       respondwith: './serch.json'
//     },
//     {
//       pattern: /\/api\/getLivelist.php\?rtype=more$/,
//       respondwith: './livelist-more.json'
//     },
//     {
//       pattern: /\/api\/getLivelist.php\?rtype=refresh$/,
//       respondwith: './livelist-refresh.json'
//     }
//   ]
// };
module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin$/,
      respondwith: './serch.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh$/,
      respondwith: './livelist-refresh.json'
    }
  ]
};
