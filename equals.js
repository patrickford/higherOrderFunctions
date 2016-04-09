Object.prototype.equals = function(x) {
    for (prop in this) {
      switch (typeof(this[prop])) {
        case 'object':
          if (!this[prop].equals(x[prop])) { 
            return false 
          }; 
          break;
        case 'function':
          if (typeof(x[prop])=='undefined' || (prop != 'equals' && this[prop].toString() != x[prop].toString())) { 
            return false; 
          }; 
          break;
        default:
          if (this[prop] != x[prop]) { 
            return false; 
          }
      }
    }

    for (prop in x) {
      if (typeof(this[prop])=='undefined') {
        return false;
      }
    }

    return true;
}
