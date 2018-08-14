Vagrant.configure("2") do |config|
  config.vm.box = "bento/centos-7.5"
  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"

  config.vm.provider "virtualbox" do |vb|
  #   vb.gui = true
  #  vb.memory = "2048"
    vb.customize ["modifyvm", :id, "--memory", "2048"]
    vb.customize ["modifyvm", :id, "--cpus", "2"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "provision/setup.yaml"
  end
end
