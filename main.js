const DiscordRPC = require('discord-rpc');

const clientId = '1101635614559977523'; // Discord Developer Portal'dan aldığınız uygulama kimliği

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log('Discord RPC bağlantısı kuruldu!');

  rpc.setActivity({
    details: 'Buyuk Yazı',
    state: 'DiscordRPC',
    largeImageKey: 'logo_white', // Discord Developer Portal'da yüklediğiniz büyük resim anahtarı
    largeImageText: 'naber?', // buyuk resım acıklaması
    smallImageKey: 'logo_2', // Discord Developer Portal'da yüklediğiniz küçük resim anahtarı
    smallImageText: 'made by: ozaii', // kucuk resim acıklaması
    instance: true,
  });
});

rpc.login({ clientId }).catch(console.error);
