// @flow

const Node = require("./node");

const Variable = function (name, index, currentFileInfo) {
    this.name = name;
    this._index = index;
    this._fileInfo = currentFileInfo;
};
Variable.prototype = new Node();
Variable.prototype.type = "Variable";
Variable.prototype.eval = function (context) {
    let variable;
    let { name } = this;

    if (name.indexOf('@@') === 0) {
        name = `@ ${new Variable(name.slice(1), this.getIndex(), this.fileInfo()).eval(context).value}`;
    }

    if (this.evaluating) {
      // eslint-disable-next-line
        throw {
          type: 'Name',
          message: `Recursive variable definition for ${name}`,
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
    }

    this.evaluating = true;

    // eslint-disable-next-line
    variable = this.find(context.frames, function (frame) {
        const v = frame.variable(name);
        if (v) {
            if (v.important) {
                const importantScope = context.importantScope[context.importantScope.length - 1];
                importantScope.important = v.important;
            }
            return v.value.eval(context);
        }
    });
    if (variable) {
        this.evaluating = false;
        return variable;
    }
      // eslint-disable-next-line
    return throw {
      type: 'Name',
      message: `variable ${name} is undefined"`,
      filename: this.fileInfo().filename,
      index: this.getIndex()
    };
};
Variable.prototype.find = function (obj, fun) {
    for (let i = 0, r; i < obj.length; i++) {
        r = fun.call(obj, obj[i]);
        if (r) { return r; }
    }
    return null;
};
module.exports = Variable;
