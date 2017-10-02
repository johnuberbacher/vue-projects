 new Vue({
  el: '#sample',
  data: {
    private: {
      types : [{
          name : 'Cupcake',
          version: '1.5',
		  description: 'On April 27, 2009, the Android 1.5 update was released, based on Linux kernel 2.6.27. This was the first release to officially use a codename based on a dessert item ("Cupcake"), a theme which would be used for all releases henceforth. The update included several new features and UI amendments'
        },
        {
          name : 'Donut',
          version: '1.6',
		  description: 'On September 15, 2009, Android 1.6 – dubbed Donut'
        },
        {
          name : 'Eclair',
          version: '2.0',
		  description: 'On October 26, 2009, the Android 2.0 SDK was released, based on Linux kernel 2.6.29 and codenamed Eclair.'
        },
        {
          name : 'Froyo',
          version: '2.2',
		  description: 'On May 20, 2010, the SDK for Android 2.2 (Froyo, short for frozen yogurt) was released, based on Linux kernel 2.6.32.'
        },
        {
          name : 'Gingerbread',
          version: '2.3',
		  description: 'On December 6, 2010, the Android 2.3 (Gingerbread) SDK was released, based on Linux kernel 2.6.35.'
        },
        {
          name : 'Honeycomb',
          version: '3.0',
		  description: 'On February 22, 2011, the Android 3.0 (Honeycomb) SDK – the first tablet-only Android update – was released, based on Linux kernel 2.6.36.'
        },
        {
          name : 'Ice Cream Sandwich',
          version: '4.0',
		  description: 'The SDK for Android 4.0.1 (Ice Cream Sandwich), based on Linux kernel 3.0.1,[93] was publicly released on October 19, 2011.[94] Googles Gabe Cohen stated that Android 4.0 was theoretically compatible with any Android 2.3.x device in production at that time. The source code for Android 4.0 became available on November 14, 2011. Ice Cream Sandwich was the last version to officially support Adobe Systems Flash player.'
        },
        {
          name : 'Jelly Bean',
          version: '4.1',
		  description: 'Google announced Android 4.1 (Jelly Bean) at the Google I/O conference on June 27, 2012. Based on Linux kernel 3.0.31, Jelly Bean was an incremental update with the primary aim of improving the functionality and performance of the user interface. The performance improvement involved "Project Butter", which uses touch anticipation, triple buffering, extended vsync timing and a fixed frame rate of 60 fps to create a fluid and "buttery-smooth" UI. Android 4.1 Jelly Bean was released to the Android Open Source Project on July 9, 2012, and the Nexus 7 tablet, the first device to run Jelly Bean, was released on July 13, 2012.'
        },
        {
          name : 'KitKat',
          version: '4.4',
		  description: 'Google announced Android 4.4 KitKat on September 3, 2013. Although initially under the "Key Lime Pie" ("KLP") codename, the name was changed because "very few people actually know the taste of a key lime pie."[144] Some technology bloggers also expected the "Key Lime Pie" release to be Android 5. KitKat debuted on Googles Nexus 5 on October 31, 2013, and was optimized to run on a greater range of devices than earlier Android versions, having 512 MB of RAM as a recommended minimum; those improvements were known as Project Svelte internally at Google.'
        },
        {
          name : 'Lollipop',
          version: '5.0',
		  description: 'Android 5.0 "Lollipop" was unveiled under the codename "Android L" on June 25, 2014, during Google I/O. It became available as official over-the-air (OTA) updates on November 12, 2014, for select devices that run distributions of Android serviced by Google, including Nexus and Google Play edition devices. Its source code was made available on November 3, 2014. Lollipop features a redesigned user interface built around a responsive design language referred to as "material design". Other changes include improvements to the notifications, which can be accessed from the lockscreen and displayed within applications as top-of-the-screen banners. Furthermore, Google made internal changes to the platform, with the Android Runtime (ART) officially replacing Dalvik for improved application performance, and with changes intended to improve and optimize battery usage, known internally as Project Volta.'
        },
        {
          name : 'Marshmallow',
          version: '6.0',
		  description: 'Android 6.0 "Marshmallow" was unveiled under the codename "Android M" during Google I/O on May 28, 2015, for the Nexus 5 and Nexus 6 phones, Nexus 9 tablet, and Nexus Player set-top box, under the build number MPZ44Q.[204] The third developer preview (MPA44G) was released on August 17, 2015 for the Nexus 5, Nexus 6, Nexus 9 and Nexus Player devices, and was updated to MPA44I that brought fixes related to Android for Work profiles.'
        },
        {
          name : 'Nougat',
          version: '7.0',
		  description: 'Android "Nougat" (codenamed N in-development) is the major 7.0 release of the Android operating system. It was first released as a developer preview on March 9, 2016, with factory images for current Nexus devices, as well as with the new "Android Beta Program" which allows supported devices to be upgraded directly to the Android Nougat beta via over-the-air update. Final release was on August 22, 2016. The final preview build was released on July 18, 2016.'
        },
        {
          name : 'Oreo',
          version: '8.0',
		  description: 'On October 19, 2016, Google released Android 7.1.1 as a developer preview for the Nexus 5X, Nexus 6P and the Pixel C. A second preview became available on November 22, 2016, before the final version was released to the public on December 5, 2016.'
        }
      ]
    }
  }
})