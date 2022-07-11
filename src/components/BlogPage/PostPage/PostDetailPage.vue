<template>
    <page-bread-crumb parent="Блог" :child="id">
        <a-space direction='vertical' wrap>

            <a-row type="flex" justify="end" style="margin:1%">
                <delete-button />
            </a-row>

            <a-row>
                <a-col type="flex" justify="center" align="middle" :key="id">
                    <a-card hoverable :title="postData.post_name" class="post">

                        <template v-if="!!postData.post_image" #cover>
                            <img alt="example" :src="postData.post_image" style="width=70%" />
                        </template>

                        <post-text :fullTextType="true" :postText="postData.post_summary" />
                        <hr />
                        <a-row>
                            <like-button />
                        </a-row>
                        <hr />
                        <post-tags-view :tags="postData.post_tags" />
                        <comment-list :comments="comments" />
                        <comment-add />
                    </a-card>
                </a-col>
            </a-row>

        </a-space>
    </page-bread-crumb>
</template>
<script>
import posts from '../../../assets/testData3.json'
import PageBreadCrumb from '../../OtherComponents/PageBreadCrumb.vue'
import DeleteButton from '../BlogOtherComponents/DeleteButton.vue'
import LikeButton from '../BlogOtherComponents/LikeButton.vue'
import PostTagsView from '../BlogOtherComponents/PostTagsView.vue'
import PostText from '../BlogOtherComponents/PostText.vue'
import CommentAdd from './CommentAdd.vue'
import CommentList from './CommentList.vue'

export default {
    components: { PageBreadCrumb, DeleteButton, PostText, LikeButton, PostTagsView, CommentAdd, CommentList },
    name: "PostDetailPage",
    data() {
        return {
            id: '',
            postData: {},
            comments: [
                {
                    id: 3,
                    comment_author: "admin",
                    comment_text: "HEllo",
                    comment_post: 5
                }
            ]
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.postData = posts[2]
    }

}
</script>
<style scoped>
.post {
    width: 70%;
    margin: 3%;
}
</style>