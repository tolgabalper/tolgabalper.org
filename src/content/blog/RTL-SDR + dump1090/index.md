---
title: "Tracking airplanes 153 km away with 50$ kit"
description: "RTL-SDR combined with dump1090 to track airplanes while sitting at car."
date: "08/10/2024"
---

## <center> What is RTL-SDR

RTL-SDR is a 30$ USB dongle which can be used for computer based radio signal scan. RTL-SDR can receive from 500kHz to 1.7GHz depending on version.
RTL-SDR can receive radio signals but cannot transmit.

## <center> What is SDR

> Radio components such as modulators, demodulators and tuners are traditionally implemented in analogue hardware components. The advent of modern computing and analogue to digital converters allows most of these traditionally hardware based components to be implemented in software instead. Hence, the term software defined radio. This enables easy signal processing and thus cheap wide band scanner radios to be produced.
> 
> ~ "RTL-SDR blog <https://www.rtl-sdr.com/about-rtl-sdr/> "

## <center> How RTL-SDR can be used

According to RTL-SDR blog there are lots of ways to use. These are the ones I found interesting.

* Use as a police radio scanner.
* Listening to EMS/Ambulance/Fire communications.
* Listening to aircraft traffic control conversations.
* Tracking aircraft positions like a radar with ADSB decoding.
* Decoding aircraft ACARS short messages.
* Tracking maritime boat positions like a radar with AIS decoding.
* Tracking and receiving meteorological agency launched weather balloon data.
* Watching analogue broadcast TV.
* Listening to satellites and the ISS.

For this blog post I will use it for listening to ATC conversations and tracking aircraft position like a ADSB radar.

## <center> Let's start
### First we need to find a good place to place the antenna

There are few things you need to check.

First check places like your window, balcony or terrace. You need to check if these areas have clear sight.
If these areas have clean sight you can install your antenna to there. But in my case we don't have a clear sight from our window or balcony.
So we(Me and my brother) started looking to map for a good place where we can go with car.

### Then we've found a good place, so we need a software
We've found a hill with pretty good clear sight.

We found a software called dump1090 for ADSB tracking. It is a good software but there were lots of forks of it, so I need to figure out which one works best.
[dump1090 by antirez](https://github.com/antirez/dump1090) worked best for us. We had some problems but my brother figured out how to solve it.
As far as I remember we had problem with `cmake` and some config file.

For ATC listening I found a software called "SDR++". Installation was simple. I just went to their site and downloaded it.
sdr++ is easy to use and has labels under certain frequencies. It also has recording feature.

### Okay so we found place and software now let's go to track those planes
I packed up, and we went to the place we found. I set up the antenna on top of the car. I used the longest antenna came with the kit. If I learned how to do configure
antenna correctly I may get much better result, but it is not that big deal for me.

After the antenna was set I typed these commands and started the dump1090 localhost

```bash
./dump1090 --interactive --net
cd public_html ; python3 -m http.server
```
We captured an airplane that is 153 km away from us. We even detected a government drone (of course not military but if I can capture it would be cool)

When I am satisfied enough with ADSB radar thing, I started to listen ATC conversations. I didn't understand anything, but it was a good activity.

## <center> My overall thoughts

I think it was a good experience. I love working with electronics and I love airplanes so combining both gave me so much entertainment. I also felt like Aslan Akbey[^1] when I was looking to the plane that is at another country's airspace.

My overall score is 9.5/10

[^1]: <img src="https://i.ytimg.com/vi/uhDpdoxNolo/mqdefault.jpg">