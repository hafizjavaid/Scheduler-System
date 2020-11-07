<template>
  <section class="benefits">
    <v-container>
      <h1>Save time & energy</h1>
      <div class="benefits_cards">
        <div class="benefit_card" v-for="(benefit, i) in benefits" :key="i">
          <span v-html="benefit.svg" class="d_arraow">
            {{ benefit.svg }}
          </span>
          <h3>{{ benefit.title }}</h3>
          <p v-html="benefit.detail">
            {{ benefit.detail }}
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          svg: `<svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M68.447 72.014C68.162 66.358 67.914 60.702 67.858 55.038C67.027 54.926 66.186 54.849 65.325 54.849C55.44 54.849 47.347 62.439 46.435 72.089C53.772 72.079 61.11 72.047 68.447 72.014Z" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.538 25H2.462C1.654 25 1 24.328 1 23.5C1 22.672 1.654 22 2.462 22H69.538C70.346 22 71 22.672 71 23.5C71 24.328 70.346 25 69.538 25Z" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.5 73.5H34.378H1.5V7.5H70.5V73.5Z" fill="white" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 21.3801H70.325V7.58606H1.5V21.3801Z" fill="#AB651E"/>
<path d="M1.5 21.5H70.5" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.448 1.5H56.358C54.926 1.5 53.765 2.661 53.765 4.093V12.845C53.765 14.277 54.926 15.438 56.358 15.438H56.448C57.88 15.438 59.041 14.277 59.041 12.845V4.093C59.041 2.661 57.88 1.5 56.448 1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M56.551 1.5H56.449C54.82 1.5 53.5 2.666 53.5 4.105V12.895C53.5 14.334 54.82 15.5 56.449 15.5H56.551C58.18 15.5 59.5 14.334 59.5 12.895V4.105C59.5 2.666 58.18 1.5 56.551 1.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.958 1.5H35.868C34.436 1.5 33.275 2.661 33.275 4.093V12.845C33.275 14.277 34.436 15.438 35.868 15.438H35.958C37.39 15.438 38.551 14.277 38.551 12.845V4.093C38.551 2.661 37.39 1.5 35.958 1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.551 1.5H36.449C34.82 1.5 33.5 2.666 33.5 4.105V12.895C33.5 14.334 34.82 15.5 36.449 15.5H36.551C38.18 15.5 39.5 14.334 39.5 12.895V4.105C39.5 2.666 38.18 1.5 36.551 1.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.467 1.5H15.377C13.945 1.5 12.784 2.661 12.784 4.093V12.845C12.784 14.277 13.945 15.438 15.377 15.438H15.467C16.899 15.438 18.06 14.277 18.06 12.845V4.093C18.06 2.661 16.899 1.5 15.467 1.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.551 1.5H15.449C13.82 1.5 12.5 2.666 12.5 4.105V12.895C12.5 14.334 13.82 15.5 15.449 15.5H15.551C17.18 15.5 18.5 14.334 18.5 12.895V4.105C18.5 2.666 17.18 1.5 15.551 1.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 65.5H61.5V28.5H10.5V65.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 28.439V65.047" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.5 28.439V65.047" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.266 40.791H10.559" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.266 53.4189H10.559" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M87.858 71.882C87.858 62.199 80.008 54.349 70.325 54.349C60.641 54.349 52.791 62.199 52.791 71.882C52.791 81.565 60.641 89.415 70.325 89.415C80.008 89.415 87.858 81.565 87.858 71.882Z" fill="#8EB0FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M87.858 71.882C87.858 62.199 80.008 54.349 70.325 54.349C60.641 54.349 52.791 62.199 52.791 71.882C52.791 81.565 60.641 89.415 70.325 89.415C80.008 89.415 87.858 81.565 87.858 71.882Z" stroke="#3A427C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M87.858 71.882C87.858 62.199 80.008 54.349 70.325 54.349C60.641 54.349 52.791 62.199 52.791 71.882C52.791 81.565 60.641 89.415 70.325 89.415C80.008 89.415 87.858 81.565 87.858 71.882Z" fill="#AB651E"/>
<path d="M84.723 57.484L82.781 59.426" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M87.858 71.882C87.858 62.199 80.008 54.349 70.325 54.349C60.641 54.349 52.791 62.199 52.791 71.882C52.791 81.565 60.641 89.415 70.325 89.415C80.008 89.415 87.858 81.565 87.858 71.882Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.5 46.328C68.291 46.328 66.5 48.225 66.5 50.565V54.348H74.5V50.565C74.5 48.225 72.709 46.328 70.5 46.328Z" fill="#677BC5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.5 46.5C68.291 46.5 66.5 48.392 66.5 50.726V54.5H74.5V50.726C74.5 48.392 72.709 46.5 70.5 46.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.5 71.882V83.563" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74 71.5C74 69.566 72.433 68 70.501 68C68.567 68 67 69.566 67 71.5C67 73.434 68.567 75 70.501 75C72.433 75 74 73.434 74 71.5Z" fill="white"/>
<path d="M40.621 69.5H52.792" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.946 77.5H33.968" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.619 81.5H44.51" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          title: "30 minutes or 30 days",
          detail:
            "Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.",
        },
        {
          title: "Pay, rate & tip",
          detail:
            "Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.",
          svg: `<svg width="100" height="91" viewBox="0 0 100 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.8879 16.393C26.8812 20.785 26.8553 25.177 26.8275 29.569H47.0604L53.0702 35.832C53.5249 36.307 54.1294 36.559 54.7463 36.559C55.0523 36.559 55.3622 36.498 55.6577 36.37C56.548 35.986 57.1237 35.088 57.1237 34.083V29.44C60.1477 28.82 62.434 26.036 62.434 22.705V16.387C55.9024 16.421 36.3112 16.418 26.8879 16.393Z" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M72.479 58.203C61.4401 58.315 64.3097 58.47 53.2678 58.556V65.967C53.2678 69.906 56.006 73.191 59.6009 73.866V77.514C59.6009 78.647 60.2514 79.661 61.2568 80.094C61.5897 80.238 61.938 80.308 62.2834 80.308C62.9799 80.308 63.6611 80.024 64.1753 79.489L70.4182 73.993H72.7688C72.9069 68.724 72.668 63.465 72.479 58.203Z" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.081 48.538V13.166C26.081 10.126 28.446 7.66003 31.3626 7.66003H67.7338C70.6504 7.66003 73.0153 10.126 73.0153 13.166V48.538V83.909C73.0153 86.951 70.6504 89.415 67.7338 89.415H31.3626C28.446 89.415 26.081 86.951 26.081 83.909V48.538Z" fill="#1C1F34"/>
<path d="M72.952 18H26.9004V79H72.952V18Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.4207 48.5V13.022C26.4207 9.972 28.7415 7.5 31.6024 7.5H67.2905C70.1515 7.5 72.4723 9.972 72.4723 13.022V48.5V83.978C72.4723 87.028 70.1515 89.5 67.2905 89.5H31.6024C28.7415 89.5 26.4207 87.028 26.4207 83.978V48.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.67313 1.5H55.6606C58.5302 1.5 60.8577 3.925 60.8577 6.917V18.644C60.8577 21.636 58.5302 24.061 55.6606 24.061V29.779C55.6606 30.779 54.5007 31.279 53.8224 30.572L47.5747 24.061H6.67313C3.80258 24.061 1.47601 21.636 1.47601 18.644V6.917C1.47601 3.925 3.80258 1.5 6.67313 1.5Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5983 1.5H54.8777C57.706 1.5 60 3.892 60 6.843V18.409C60 21.36 57.706 23.5 54.8777 23.5V29.391C54.8777 30.378 53.735 30.871 53.0663 30.173L46.9089 23.5H6.5983C3.769 23.5 1.47601 21.36 1.47601 18.409V6.843C1.47601 3.892 3.769 1.5 6.5983 1.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M92.501 34.623H60.968C57.47 34.623 54.635 37.578 54.635 41.224V61.867C54.635 65.513 57.47 68.469 60.968 68.469V73.414C60.968 74.633 62.3822 75.243 63.2083 74.381L69.8512 68.469H92.501C95.999 68.469 98.835 65.513 98.835 61.867V41.224C98.835 37.578 95.999 34.623 92.501 34.623Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M92.0519 34.5H60.567C57.0747 34.5 54.2435 37.444 54.2435 41.075V60.635C54.2435 64.266 57.0747 67.5 60.567 67.5V72.135C60.567 73.349 61.9792 73.957 62.8034 73.098L69.4367 67.5H92.0519C95.5442 67.5 98.3764 64.266 98.3764 60.635V41.075C98.3764 37.444 95.5442 34.5 92.0519 34.5Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9022 9.79099C10.8475 9.97399 10.6911 10.098 10.5146 10.098H8.11993C7.72561 10.098 7.56155 10.648 7.88103 10.901L9.81808 12.436C9.96103 12.549 10.0205 12.75 9.96679 12.933L9.22613 15.416C9.10428 15.825 9.5341 16.166 9.85262 15.913L11.7906 14.379C11.9336 14.265 12.1264 14.265 12.2684 14.379L14.2064 15.913C14.5249 16.166 14.9548 15.825 14.8329 15.416L14.0922 12.933C14.0385 12.75 14.098 12.549 14.241 12.436L16.178 10.901C16.4975 10.648 16.3334 10.098 15.9391 10.098H13.5444C13.3679 10.098 13.2115 9.97399 13.1568 9.79099L12.4171 7.30699C12.2953 6.89799 11.7638 6.89799 11.6419 7.30699L10.9022 9.79099Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4963 9.79099C20.4416 9.97399 20.2852 10.098 20.1087 10.098H17.714C17.3197 10.098 17.1556 10.648 17.4751 10.901L19.4122 12.436C19.5551 12.549 19.6146 12.75 19.5609 12.933L18.8202 15.416C18.6984 15.825 19.1282 16.166 19.4467 15.913L21.3847 14.379C21.5277 14.265 21.7205 14.265 21.8625 14.379L23.8005 15.913C24.119 16.166 24.5488 15.825 24.427 15.416L23.6863 12.933C23.6326 12.75 23.6921 12.549 23.835 12.436L25.7721 10.901C26.0916 10.648 25.9275 10.098 25.5332 10.098H23.1385C22.962 10.098 22.8056 9.97399 22.7509 9.79099L22.0112 7.30699C21.8894 6.89799 21.3579 6.89799 21.236 7.30699L20.4963 9.79099Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0904 9.79099C30.0357 9.97399 29.8793 10.098 29.7028 10.098H27.3081C26.9138 10.098 26.7497 10.648 27.0692 10.901L29.0063 12.436C29.1492 12.549 29.2087 12.75 29.155 12.933L28.4143 15.416C28.2925 15.825 28.7223 16.166 29.0408 15.913L30.9788 14.379C31.1218 14.265 31.3146 14.265 31.4566 14.379L33.3946 15.913C33.7131 16.166 34.1429 15.825 34.0211 15.416L33.2804 12.933C33.2267 12.75 33.2862 12.549 33.4291 12.436L35.3662 10.901C35.6857 10.648 35.5216 10.098 35.1273 10.098H32.7326C32.5561 10.098 32.3997 9.97399 32.345 9.79099L31.6053 7.30699C31.4835 6.89799 30.952 6.89799 30.8301 7.30699L30.0904 9.79099Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.6845 9.79099C39.6298 9.97399 39.4734 10.098 39.2969 10.098H36.9022C36.5079 10.098 36.3438 10.648 36.6633 10.901L38.6004 12.436C38.7433 12.549 38.8028 12.75 38.7491 12.933L38.0084 15.416C37.8866 15.825 38.3164 16.166 38.6349 15.913L40.5729 14.379C40.7159 14.265 40.9087 14.265 41.0507 14.379L42.9887 15.913C43.3072 16.166 43.737 15.825 43.6152 15.416L42.8745 12.933C42.8208 12.75 42.8803 12.549 43.0232 12.436L44.9603 10.901C45.2798 10.648 45.1157 10.098 44.7214 10.098H42.3267C42.1502 10.098 41.9938 9.97399 41.9391 9.79099L41.1994 7.30699C41.0775 6.89799 40.546 6.89799 40.4242 7.30699L39.6845 9.79099Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.2786 9.79099C49.2239 9.97399 49.0675 10.098 48.891 10.098H46.4963C46.102 10.098 45.9379 10.648 46.2574 10.901L48.1945 12.436C48.3374 12.549 48.3969 12.75 48.3432 12.933L47.6025 15.416C47.4807 15.825 47.9105 16.166 48.229 15.913L50.167 14.379C50.31 14.265 50.5028 14.265 50.6448 14.379L52.5828 15.913C52.9013 16.166 53.3311 15.825 53.2093 15.416L52.4686 12.933C52.4149 12.75 52.4744 12.549 52.6173 12.436L54.5544 10.901C54.8739 10.648 54.7098 10.098 54.3155 10.098H51.9208C51.7443 10.098 51.5879 9.97399 51.5332 9.79099L50.7935 7.30699C50.6717 6.89799 50.1401 6.89799 50.0183 7.30699L49.2786 9.79099Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.2257 61V58.577C66.0376 58.146 64.5236 55.858 64.3173 53.934L67.161 53.254C67.2992 54.681 68.2624 55.995 70.3722 55.995C71.8631 55.995 72.7333 55.293 72.7333 54.296C72.7333 53.526 72.1615 52.936 71.013 52.688L68.9043 52.235C66.4271 51.69 64.8911 50.151 64.8911 47.976C64.8911 45.575 66.7715 43.808 69.2257 43.423V41H71.5647V43.491C74.2012 43.968 75.3477 45.779 75.6691 47.297L72.8494 48.089C72.7112 47.297 72.1154 45.983 70.235 45.983C68.7671 45.983 67.9641 46.821 67.9641 47.749C67.9641 48.453 68.4697 49.041 69.5461 49.268L71.6338 49.743C74.5235 50.377 75.8302 52.076 75.8302 54.114C75.8302 56.199 74.3163 58.124 71.5647 58.554V61H69.2257Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M82.6574 61V58.577C79.4693 58.146 77.9553 55.858 77.7491 53.934L80.5928 53.254C80.7309 54.681 81.6942 55.995 83.8039 55.995C85.2948 55.995 86.165 55.293 86.165 54.296C86.165 53.526 85.5932 52.936 84.4448 52.688L82.336 52.235C79.8588 51.69 78.3228 50.151 78.3228 47.976C78.3228 45.575 80.2032 43.808 82.6574 43.423V41H84.9965V43.491C87.6329 43.968 88.7794 45.779 89.1008 47.297L86.2811 48.089C86.1429 47.297 85.5472 45.983 83.6667 45.983C82.1988 45.983 81.3958 46.821 81.3958 47.749C81.3958 48.453 81.9014 49.041 82.9778 49.268L85.0655 49.743C87.9553 50.377 89.262 52.076 89.262 54.114C89.262 56.199 87.748 58.124 84.9965 58.554V61H82.6574Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="99.7786" height="91" fill="white" transform="translate(0.0368958)"/>
</clipPath>
</defs>
</svg>
`,
        },
        {
          title: "Your stuff protected",
          detail:
            "Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.",

          svg: `<svg width="78" height="91" viewBox="0 0 78 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.927 79.308C68.354 63.872 68.354 16.496 68.354 16.496C50.694 14.263 34.927 1.5 34.927 1.5C34.927 1.5 19.16 14.263 1.5 16.496C1.5 16.496 1.5 63.872 34.927 79.308Z" fill="white" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.476 55.102C53.477 54.284 53.63 53.566 53.892 52.938C43.66 53.222 35.419 61.614 35.419 71.914C35.419 74.357 35.899 76.687 36.743 78.835C37.048 78.646 37.375 78.475 37.737 78.333C41.452 76.876 44.925 75 48.299 72.957C51.082 67.336 53.467 61.468 53.476 55.102Z" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.058 21.445C50.354 18.711 40.181 12.55 34.927 8.93604V40.404H58.381C60.676 32.86 61.65 25.889 62.058 21.445Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.927 40.4041H11.473C15.065 52.2111 21.9 65.4261 34.927 72.5911V40.4041Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.927 72.591C13.576 60.849 8.842 32.849 7.795 21.445C19.501 18.711 29.673 12.551 34.927 8.93701C40.181 12.551 50.354 18.711 62.058 21.445C61.012 32.844 56.279 60.848 34.927 72.591Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.922 71.913C75.922 62.248 68.086 54.411 58.42 54.411C48.754 54.411 40.918 62.248 40.918 71.913C40.918 81.579 48.754 89.415 58.42 89.415C68.086 89.415 75.922 81.579 75.922 71.913Z" fill="#AB651E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.922 71.913C75.922 62.248 68.086 54.411 58.42 54.411C48.754 54.411 40.918 62.248 40.918 71.913C40.918 81.579 48.754 89.415 58.42 89.415C68.086 89.415 75.922 81.579 75.922 71.913Z" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.904 74.822L54.061 78.979L66.774 66.266" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.5 8.93604V72.59" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.47 40.5H58.273" stroke="#1C1F34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.benefits {
  padding: 80px 0;
  padding-bottom: 0;
  font-family: "Nunito", sans-serif;
  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 46px;

    color: #000000;
  }
  .container {
    padding: 0 !important;
  }
  .benefits_cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    margin: auto;
    column-gap: 10px;
    @media (max-width: 940px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    .benefit_card {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      margin-top: 20px;
      width: 100%;
      padding-bottom: 30px;
      @media (max-width: 767px) {
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
      }
      p {
        margin: 0;
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;

        color: #000;
      }
      .d_icon {
        transform: translateY(-50px);
      }
      .d_arraow {
        cursor: pointer;
      }
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        line-height: 29px;
        color: #000;
      }
    }
  }
}
</style>