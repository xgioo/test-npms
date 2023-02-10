let async = require("async");
async.auto(
  {
    get_data: function (callback) {
      // async code to get some data
      callback(null, "data", "converted to array");
    },
    make_folder: function (callback) {
      // async code to create a directory to store a file in
      // this is run at the same time as getting the data
      callback(null, "folder");
    },
    write_file: [
      "get_data",
      "make_folder",
      function (results, callback) {
        // once there is some data and the directory exists,
        // write the data to a file in the directory
        callback(null, "filename");
      },
    ],
    email_link: [
      "write_file",
      function (results, callback) {
        // once the file is written let's email a link to it...
        callback(null, { file: results.write_file, email: "user@example.com" });
      },
    ],
  },
  function (err, results) {
    if (err) {
      console.log("err = ", err);
    }
    console.log("results = ", results);
    // results = {
    //     get_data: ['data', 'converted to array']
    //     make_folder; 'folder',
    //     write_file: 'filename'
    //     email_link: { file: 'filename', email: 'user@example.com' }
    // }
  }
);
