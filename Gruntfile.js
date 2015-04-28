module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        sass: {
            dist: {
                options: {
                    style: "expanded"
                },
                files: {
                    "assets/css/style.css": "assets/sass/style.scss"
                }
            }
        },

        uglify: {
            build: {
                src: "assets/js/main.js",
                dest: "assets/js/main.min.js"
            }
        },

        watch: {
            css: {
                files: [
                "!**/node_modules/**",
                "assets/sass/*.scss"
                ],
                tasks: ["sass"],
                options: {
                    livereload: true
                },
            },
        },

    });

}
