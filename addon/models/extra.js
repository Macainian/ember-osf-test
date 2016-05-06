import DS from 'ember-data';

export default DS.Model.extend({
    node: DS.belongsTo('node'),
    version: DS.attr('number'),
    downloads: DS.attr('number'),
    //     hashes: DS.attr('hash'),
    //         md5: DS.attr('string'),
    //         sha256: DS.attr('string')
});
