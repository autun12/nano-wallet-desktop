import { Transform } from 'ember-data';

export default Transform.extend({
  deserialize(serialized) {
    if (!serialized) {
      return undefined;
    }

    return new Date(Math.round(serialized * 1000));
  },

  serialize(deserialized) {
    if (!deserialized) {
      return undefined;
    }

    return String(Math.round(deserialized / 1000));
  },
});
