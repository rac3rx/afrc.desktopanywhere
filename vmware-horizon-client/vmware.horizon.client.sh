# https://medium.com/@blessymoses17/install-vmware-horizon-client-in-fedora-30-e584344bdce5
# Install VMware Horizon Client in Fedora 30
# Steps to install VMware Horizon client for Linux

# 1. Install the pre-requisite libraries
dnf install libpng12

# 2. Create the symbolic links for libudev.so.0 and libffi.so.5 libraries
ln -s /usr/lib64/libudev.so.1 /usr/lib64/libudev.so.0$ ln -s /usr/lib64/libffi.so.6 /usr/lib64/libffi.so.5

# 3. Download install bundle fromwget -ct3 https://download3.vmware.com/software/view/viewclients/CART22FQ1/VMware-Horizon-Client-2103-8.2.0-17742757.x64.bundle
# 4. Install the client using the bundle downloaded from VMware website
sh VMware-Horizon-Client-4.10.0–11053294.x64.bundle$ ./VMware-Horizon-Client-4.10.0–11053294.x64.bundle

# 5. Launch the client
LD_LIBRARY_PATH=/usr/lib/vmware /usr/lib/vmware/view/bin/vmware-view


