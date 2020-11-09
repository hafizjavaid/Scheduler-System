<template>
  <div class="nav_header">
    <v-container>
      <v-toolbar flat class="hidden-xs-and-down topBar">
        <v-toolbar-title>
          <span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                transform="rotate(-180 25 25)"
                fill="#F1F1F1"
              />
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.4986 22.9727L14.7149 22.9727L22.3797 15.2118C22.7892 14.8416 22.3824 14.2186 21.9986 13.8227C21.7986 13.6173 21.5297 13.5132 21.2594 13.5132C21.0108 13.5132 20.7608 13.601 20.5662 13.7794L9.77566 23.6078C9.69458 23.6889 9.68107 23.7348 9.65269 23.774C9.59593 23.8591 9.55945 23.8943 9.54053 23.9362C9.5081 24.0213 9.50404 24.0821 9.49323 24.1416C9.48242 24.1983 9.4608 24.2524 9.45945 24.3105C9.4608 24.397 9.48242 24.451 9.49323 24.5078C9.50539 24.5686 9.5081 24.6281 9.53107 24.6848C9.55945 24.7551 9.59593 24.7889 9.62026 24.8294C9.68107 24.9159 9.69458 24.9605 9.72972 24.997C9.77026 25.0321 20.5649 34.8686 20.5649 34.8686C20.9716 35.2389 21.6121 35.2213 21.9973 34.8254C22.3811 34.4308 22.7878 33.8078 22.3797 33.4362L14.7149 25.6754L40.4986 25.6754C41.0581 25.6754 41.8919 24.8673 41.8919 24.324C41.8919 23.7821 41.0581 22.9727 40.4986 22.9727Z"
                  fill="#283060"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="32.4324"
                    height="21.6216"
                    fill="white"
                    transform="translate(41.8919 35.1348) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text>
            <span>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  transform="rotate(-180 25 25)"
                  fill="#F1F1F1"
                />
                <path
                  d="M35 15.3635L32.9857 13L25 22.3704L17.0143 13L15 15.3635L22.9857 24.7339L15 34.1043L17.0143 36.4678L25 27.0975L32.9857 36.4678L35 34.1043L27.0143 24.7339L35 15.3635Z"
                  fill="#2E3A59"
                />
              </svg>
            </span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav_header {
  box-shadow: 0px 4px 11px -5px rgba(0, 0, 0, 0.25);
}
a {
  text-decoration: none;
  // color: #fff;
  font-family: "Nunito", sans-serif;
  color: #000;
}
.navBar {
  margin-bottom: 100px;
  header {
    background-color: transparent !important;
  }
}
</style>