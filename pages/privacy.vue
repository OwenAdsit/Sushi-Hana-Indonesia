<script setup lang="ts">
const { width } = useWindowSize()

const bgWidth = computed(() => {
  if (width.value < 768)
    return '224px'
  return '453px'
})

useHead({
  title: 'Privacy Policy',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Sushi Hana Indonesia Privacy Policy',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout name="bgwhite">
      <div class="bg-light py-48 text-dark">
        <div class="container mx-auto max-w-[1060px]">
          <h1 class="display-2 font-normal">
            Privacy policy
          </h1>

          <p class="mt-14">
            At Sushi Hana Surabaya, accessible from <b>https://sushihanaindonesia.com/</b>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Sushi Hana Surabaya and how we use it.
          </p>
          <p class="mt-3.5">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to <ClientOnly><sh-link-underline>contact us</sh-link-underline></ClientOnly>.
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Log Files
          </h2>

          <p class="mt-3.5">
            Sushi Hana Surabaya follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Privacy Policies
          </h2>

          <p class="mt-3.5">
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Sushi Hana Surabaya, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p class="mt-3.5">
            Note that Sushi Hana Surabaya has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Third Party Privacy Policies
          </h2>

          <p class="mt-3.5">
            Sushi Hana Surabaya’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>

          <p class="mt-3.5">
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. <ClientOnly><sh-link-underline>What Are Cookies</sh-link-underline></ClientOnly>?
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Children’s Information
          </h2>

          <p class="mt-3.5">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>

          <p class="mt-3.5">
            Sushi Hana Surabaya does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Online Privacy Policy Only
          </h2>

          <p class="mt-3.5">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Sushi Hana Surabaya. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2 class="display-4 mt-14 font-bold">
            Consent
          </h2>

          <p class="mt-3.5">
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.bg-light {
  --bg-width: v-bind(bgWidth);

  background-image: url('/img/bg-privacy.svg');
  background-repeat: no-repeat;
  background-position: calc(var(--bg-width) / 2 * -1) center;
  background-size: var(--bg-width) auto;
}
</style>
