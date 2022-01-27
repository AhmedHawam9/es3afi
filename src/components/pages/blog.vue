<template>
    <div>
        <p>title: {{$route.query.title}}</p>
        <p v-html="$route.query.text"></p>
        <p>date: {{$route.query.date}}</p>
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>