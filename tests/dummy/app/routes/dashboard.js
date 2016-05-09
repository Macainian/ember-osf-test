import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

var DOCKER_API_URL = "http://129.74.247.86:8080/v1/";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    model()
    {
        const user = this.modelFor('application');
        return user.get('nodes');
    },
    actions:
    {
        runScript()
        {
            var data_url = $("#data-select").val();
            var script_select = $("#script-select");
            var script_url = script_select.val();
            var script_name = script_select.find(":selected").data("script-name");
            var url = DOCKER_API_URL + "container/";
            var username = "admin";
            var password = "admin";

            var data = {
                "image_name": "keyz182/test_container",
                "image_tag": "latest",
                "scripturl": script_url,
                "scriptname": script_name,
                "container_args": "python /mnt/" + script_name,
                "dataurl": data_url,
                "datapath": "/mnt/"
            };

            $.ajax(
            {
                data: data,
                type: "POST",
                url: url,
                headers: {"Authorization": "Basic " + btoa(username + ":" + password), "Access-Control-Allow-Origin": "*"},

                success: function()
                {
                    alert("Success");
                },

                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    alert(XMLHttpRequest.responseText);
                }
            });

            // json_return_data = json.loads(resp.text)
            //
            // guid = json_return_data["container_id"]
            //
            // ret = {
            //     'data': data,
            //     'code': code,
            //     'mode': mode,
            //     'guid': guid,
            //     'error': error,
            // }
        }
    }
});
