define([], function() {
  return {
    palette_to_function: function(palette) {
      return function(i) {
        return palette[i % palette.length];
      };
    }
  }
});