echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
bit config set analytics_reporting true
bit start -p 3000 -n
