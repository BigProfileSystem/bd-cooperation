                      <script>
  import Layout from "../../layouts/main";
  import PageHeader from "@/components/page-header";
  import appConfig from "@/app.config";
  import axios from "axios"
  //import VueJsonPretty from 'vue-json-pretty'

  /**
   * Workspace component
   */
  export default {
    page: {
      title: "Worksapce",
      meta: [{name: "description", content: appConfig.description}]
    },
    components: {Layout, PageHeader},
    data() {
      return {
        title: "Create Workspace",
        items: [
          {
            text: "Workspace",
            href: "/"
          },
          {
            text: "Create Workspace",
            active: true
          }
        ],
        workspace : {
          wsId : 0,
          wsName : "",
          wsDs : "",
          lastWork : null,
          lastWorkComt : null,
          wsCrtDt : null,
          wsModDt : null,
          percent : null,
          userLockYn : "\u0000",
          logFilePath : null,
          user : null
        }
      };
    },
    created() {

    },
    methods: {
        createWs() {
          axios.post('/wss', this.workspace
          ).then(response => {
            if(response.status == 200){
              this.$router.push({path : '/'})
            }
          })
        }
    }
  };
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items"/>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Create New Workspace</h4>
            <form>
              <div class="form-group row mb-4">
                <label for="projectname" class="col-form-label col-lg-2">Workspace Name</label>
                <div class="col-lg-10">
                  <input
                      id="projectname"
                      name="projectname"
                      type="text"
                      class="form-control"
                      v-model="workspace.wsName"
                      placeholder="Enter Workspace Name..."
                  />
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="projectdesc" class="col-form-label col-lg-2">Workspace Description</label>
                <div class="col-lg-10" >
                  <textarea
                      id="projectdesc"
                      class="form-control"
                      rows="10"
                      v-model="workspace.wsDs"
                      placeholder="Enter Workspace Description..."
                  ></textarea>
                </div>
              </div>

              <div class="row justify-content-end">
                <div class="col-lg-10 text-sm-right button-items">
                  <b-button class="btn btn-success" @click="createWs()">Create</b-button>
                  <router-link tag="a" to="/">
                    <button class="btn btn-warning">Cancel</button>
                  </router-link>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>

    <!-- end row -->
  </Layout>
</template>
