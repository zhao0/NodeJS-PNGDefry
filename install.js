var fs = require('fs');
var os = require('os');
var spawn = require('child_process').spawn;

var base_dir = __dirname;
var tmp_dir = base_dir + "/tmp";
var tools_dir = base_dir + "/tools";
var pngdefy_bin_dir = tools_dir + "/bin";
if (!fs.existsSync(tools_dir)) {
    fs.mkdirSync(tools_dir, '755');
}
if (!fs.existsSync(pngdefy_bin_dir)) {
    fs.mkdirSync(pngdefy_bin_dir, '755');
}

var pngdefry_src_path = base_dir + "/pngdefry-master";
//Everything seems ok.
//Rename pngdefry path 
//Let's configure the tool
try {
    process.chdir(pngdefry_src_path);
} catch (err) {
    process.exit();
}
var pngdefry_configure_file = "./configure";
var params = [pngdefry_configure_file, "--prefix", tools_dir];
var pngdefry_config = spawn('sh', params);

pngdefry_config.on('exit', function (code, signal) {
    if (code != null) {

        var pngdefry_make = spawn('make');

        pngdefry_make.on('exit', function (code, signal) {
            if (code != null) {
                var pngdefry_make_install = spawn('make', ['install']);
                pngdefry_make_install.on('exit', function (code, signal) {
                    
                });
                pngdefry_make_install.on("error", function (err) {
                    console.log(err)
                });
            }
        });
        pngdefry_make.on("error", function (err) {
            console.log(err)
        });
    }
});

pngdefry_config.on("error", function (err) {
    console.log(err);
});

//   process.exit();

