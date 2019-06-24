<script>
export default {
  methods: {
    handleScroll: (evt, el) => {
      let top = el.getBoundingClientRect().top;
      if (window.scrollY > top + window.pageYOffset - 600) {
        el.classList.add("isView");
        return true;
      }
        return false;
      }
  }
}
</script>