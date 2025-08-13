## seeding & peering-how files really travel on p2p networks

### what is peering?
**peering** is the process of directly connecting two or more devices (peers) to share data without going through a central server.

in p2p networks:

* **every peer is both a client and a server**
* peers **request** data chunks from others
* peers **send** data chunks to others at the same time

example tools: bittorrent, ipfs, gnutella, webtorrent.

---

### the role of seeding

**seeding** happens when a peer has **100% of the file** and continues sharing it after finishing their own download.

in bittorrent terms:

* **leecher** → downloading and uploading
* **seeder** → has the complete file and uploads only
* **swarm** → all peers (seeders + leechers) connected for a specific file

without enough seeders, downloads can stall or crawl.

---

### how data moves? chunking & distribution

instead of sending one giant file, p2p splits it into small pieces (chunks).

* peers exchange **hash lists** to verify integrity of each chunk
* you can get different chunks from different peers simultaneously
* once you get a chunk, you can **immediately** start uploading it to others

this parallelism is why torrents can sometimes be faster than direct downloads.

---

### real-world analogy

imagine a big book being copied by 10 people.
instead of one person copying the whole book for you, each person copies 1 chapter and then swaps with the others until everyone has the full book.

---

### the importance of ratio

many p2p communities enforce a **share ratio**:

```text
share ratio = uploaded data / downloaded data
```

* ratio ≥ 1 → you’ve uploaded at least as much as you’ve downloaded
* low ratios can get you banned from private trackers

---

### command-line tools for seeding & peering

on linux, you can run a headless torrent client like **aria2c** or **transmission-cli**:

```bash
# download & seed a torrent
aria2c --enable-dht --seed-time=0 "file.torrent"
```

(`--seed-time=0` means seed indefinitely)

check peers:

```bash
transmission-remote -t <id> -peers
```

---

### peering outside of torrents

p2p concepts also power:

* **ipfs** (interplanetary file system) → content-addressed distributed storage
* **syncthing** → secure folder syncing without cloud
* **webrtc data channels** → browser-based p2p connections

---

### tl;dr

* **peering** = all peers share with each other, no central server needed
* **seeding** = keeping your upload open after finishing the download
* more seeders → faster & healthier swarms
* chunks + parallelism = efficiency

---
next time you close your torrent right after it finishes, remember: without seeders, the swarm dies.