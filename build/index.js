const fs = require('fs'),
config = require('./config'),
d = require('../lib');


let includes = config.includes;
document = null;

let str = "";
if (config.iuclude_utils){
str+= `const dutil = {
  is_num(i){
    return typeof i === 'number';
  }
}\n\n`
}
str+= `function D(){
  this.d = document;
  this.r = null;
}

D.prototype = {\n  `;

for (let i in includes) {
  if(includes[i]){
    str+= i.toString() + ": " +  d.prototype[i].toString() + ",\n  "
  }
}

str = str.slice(0, -4)
str+= '\n}\n\nconst '+ config.export_as +' = new D();'

if(config.is_module){
  str+= '\n\nexport { '+ config.export_as +' }'
}

fs.writeFileSync('./dist/'+ config.module_name + config.module_ext, str);
