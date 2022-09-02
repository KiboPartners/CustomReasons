module.exports = function (grunt) {
  "use strict";
  grunt.loadTasks("./tasks");
  require("time-grunt")(grunt);
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    mozuconfig: grunt.file.readJSON("./mozu.config.json"),
    ts: {
      default: {
        tsconfig: {
          passThrough: true,
          tsconfig: "./",
        },
      },
    },
    eslint: {
      options: {
        overrideConfigFile: "./.eslintrc.js",
      },
      target: ["src/**"],
    },
    browserify: {
      all: {
        files: [
          {
            expand: true,
            cwd: "assets/build/",
            src: ["**/*.js"],
            dest: "assets/dist/",
            ext: ".all.js",
            sourceType: "module",
            extDot: "last",
          },
        ],
        options: {
          browserifyOptions: {
            standalone: "index",
            node: true,
            commondir: false,
            browserField: false,
            builtins: false,
            insertGlobals: false,
          },
        },
      },
    },
    manifest: { all: { src: "assets/build/manifest.js", dist: "./dist/manifest.all.js" } },
    mozusync: {
      options: {
        applicationKey: "<%= mozuconfig.workingApplicationKey %>",
        context: "<%= mozuconfig %>",
        watchAdapters: [
          {
            src: "mozusync.upload.src",
            action: "upload",
            always: ["./assets/functions.json"],
          },
          {
            src: "mozusync.del.remove",
            action: "delete",
          },
        ],
      },
      upload: {
        options: {
          action: "upload",
          noclobber: true,
        },
        src: ["./assets/**/*"],
        filter: "isFile",
      },
      del: {
        options: { action: "delete" },
        src: "<%= mozusync.upload.src %>",
        filter: "isFile",
        remove: [],
      },
      wipe: {
        options: { action: "deleteAll" },
        src: "<%= mozusync.upload.src %>",
      },
    },
    watch: {
      options: { spawn: false },
      src: {
        files: ["./src/**/*.ts"],
        tasks: ["eslint", "ts", "browserify:all", "manifest"],
      },
      sync: {
        files: ["assets/**/*"],
        tasks: ["eslint", "ts", "mozusync:upload", "mozusync:del"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("tsbuild", ["ts"]);

  grunt.registerTask("build", ["eslint", "ts", "browserify:all", "manifest"]);
  grunt.registerTask("default", ["build", "mozusync:upload"]);
  grunt.registerTask("reset", ["mozusync:wipe", "mozusync:upload"]);
  grunt.registerTask("lint", ["eslint"]);
  grunt.registerTask("cont", ["watch"]);
  grunt.registerTask("c", ["watch"]);
  grunt.registerTask("w", ["watch"]);
};
