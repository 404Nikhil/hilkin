## Skip the GUI: Control Your Wi-Fi & Tethering from CLI


Sometimes your Wi-Fi or USB tethering just refuses to play nice.
Maybe the icon spins forever, NetworkManager freezes, or your tethered connection just doesn’t show up.
When the GUI lets you down, **the terminal still has your back**.

---

## Identify Your Network Interface

First, find out the name of your Wi-Fi or tethering interface.

```bash
ip link show
```

Example output:

```
1: lo: <LOOPBACK,UP,LOWER_UP> ...
2: wlp3s0: <BROADCAST,MULTICAST> ...
3: enp0s20f0u2: <BROADCAST,MULTICAST> ...
```

* **wlp3s0** → Wi-Fi interface
* **enp0s20f0u2** (or similar) → USB tethering interface

---

## Turn the Interface Off

Replace `<interface>` with your actual interface name.

```bash
sudo ip link set <interface> down
```

Example for Wi-Fi:

```bash
sudo ip link set wlp3s0 down
```

---

## Turn the Interface On

```bash
sudo ip link set <interface> up
```

Example for USB tethering:

```bash
sudo ip link set enp0s20f0u2 up
```

---

## Force a Reconnect (Optional but Handy)

If you’re using **NetworkManager**, you can restart it:

```bash
sudo systemctl restart NetworkManager
```

Or reconnect to a specific Wi-Fi network:

```bash
nmcli device wifi connect "<SSID>" password "<PASSWORD>"
```

---

## Bonus: One-Command Toggle Script

If you need to do this often, make a small script:

```bash
#!/bin/bash
IFACE=$1

sudo ip link set $IFACE down
sleep 2
sudo ip link set $IFACE up
```

Save it as `toggle_net.sh` and make it executable:

```bash
chmod +x toggle_net.sh
```

Run it:

```bash
./toggle_net.sh wlp3s0
```

---

### TL;DR

When in doubt, reset the interface manually:

```bash
sudo ip link set <interface> down
sudo ip link set <interface> up
```
