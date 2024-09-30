// const {
//   shareAll,
//   withModuleFederationPlugin,
// } = require("@angular-architects/module-federation/webpack");

// module.exports = withModuleFederationPlugin({
//   name: "angularChildModuleFederation",
//   // filename: "remoteEntry.js",
//   exposes: {
//     "./angularChildModuleFederation": ".//src/app/child/child.component.ts",
//     // './Component': './src/app/app.component.ts',
//   },

//   shared: {
//     ...shareAll({
//       singleton: true,
//       strictVersion: true,
//       requiredVersion: "auto",
//     }),
//   },
// });

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "angularChildModuleFederation",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      // library: { type: "module" },

      // For remotes (please adjust)
      name: "angularChildModuleFederation",
      filename: "remoteEntry.js",
      exposes: {
        "./angularChildModuleFederation": ".//src/app/child/child.component.ts",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
