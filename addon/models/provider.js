import DS from 'ember-data';

export default DS.Model.extend({
    node: DS.attr('string'),
    kind: DS.attr('string'),
    name: DS.attr('string'),
    path: DS.attr('string'),
    provider: DS.attr('string'),
    files: DS.attr('string'),
    links: DS.attr('string'),
});
