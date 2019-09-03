<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Board</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li v-for="( single, index ) in menu" v-if="!single.child" class="nav-item">
<!--                    <a class="nav-link" v-bind:href="single.href">{{ single.title }}<span
                        class="sr-only">(current)</span></a>-->

                    <router-link class="nav-link" v-bind:to="single.href" v-on:click.native="goBreadcrumb">{{ single.title }}<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="dropdown-divider"></li>
                <li v-for="( single, index ) in menu" v-if="single.child" class="nav-item dropdown">
                    <a v-if="single.child" class="nav-link dropdown-toggle" v-bind:href="single.href"
                       :id="`navbarDropdown-${single.id}`"
                       role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ single.title }}</a>
                    <ul v-if="single.child" class="dropdown-menu" :aria-labelledby="`navbarDropdown-${single.id}`">
                        <li v-for="( child_element, index ) in single.child" v-if="!child_element.child" class="nav-item">


                          <!--  <a class="nav-link child-link" v-bind:href="child_element.href">{{ child_element.title }}</a>-->

                            <router-link class="nav-link child-link" v-bind:to="child_element.href" v-on:click.native="goBreadcrumb">{{ child_element.title }}</router-link>

                        </li>

                        <li v-for="( child_element, index ) in single.child" v-if="child_element.child" class="nav-item dropdown">


                            <a v-if="single.child" class="nav-link dropdown-toggle" v-bind:href="single.href"
                               :id="`navbarDropdown-${single.id}`"
                               role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ child_element.title }}</a>


                            <ul v-if="child_element.child" class="dropdown-menu" :aria-labelledby="`navbarDropdown-${child_element.id}`">
                                <li v-for="( child_element_n, index ) in child_element.child" v-if="child_element.child" class="nav-item">

                                    <!--<a class="nav-link child-link" v-bind:href="child_element_n.href">{{ child_element_n.title }}</a>-->

                                    <router-link class="nav-link child-link" v-bind:to="child_element_n.href" v-on:click.native="goBreadcrumb">{{ child_element_n.title }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>
<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    export default {
        name: 'SidebarMenuComponent',
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
            };
        },
        mounted() {
            this.$store.dispatch('getMenu');
        },
       computed: {
           menu () {
                return this.$store.getters.menu;
            },
        },
        methods: {
            goBreadcrumb(event){
                this.$emit('goBreadcrumb', {href:event.currentTarget.getAttribute('href')});
            },
            onToggleCollapse(collapsed) {
                this.$emit('onToggleCollapse', {collapsed:collapsed});
            },
            onItemClick(event, item) {
                this.$emit('onItemClick', {event:event,item:item})
            }
        }
    };
</script>

<style scoped>

</style>
