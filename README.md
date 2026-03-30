# 📇 Contact Manager App (Kişi Yönetim Sistemi)

Modern web geliştirme standartlarına uygun olarak tasarlanmış, asenkron veri yönetimi ve yönlendirme (routing) mimarilerinin uygulandığı Single Page Application (SPA) projesidir. Restful API üzerinden tam kapsamlı CRUD (Create, Read, Update, Delete) işlemleri gerçekleştirilmektedir.

## 🚀 Proje Özellikleri

* **Gelişmiş State Management:** TanStack Query (React Query) kullanılarak sunucu durumu (server state) yönetimi, veri önbellekleme (caching) ve gereksiz render'ların önlenmesi sağlandı.
* **Dinamik Yönlendirme:** React Router DOM ile sayfa yenilenmeden, akıcı bir şekilde bileşenler arası geçiş (Client-side routing) yapısı kuruldu.
* **REST API Entegrasyonu:** Axios kullanılarak harici bir API (MockAPI) ile asenkron HTTP istekleri (GET, POST, DELETE) yönetildi.
* **Kullanıcı Deneyimi:** Veri yüklenme (loading) ve hata (error) durumları UI üzerinde anlık olarak kontrol altına alındı.

## 🛠️ Kullanılan Teknolojiler

* **Frontend Framework:** React.js (Vite)
* **Asenkron Veri Yönetimi:** TanStack Query (React Query)
* **Routing:** React Router DOM
* **HTTP İstemcisi:** Axios

## 📂 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Projeyi klonlayın:
  ---bash
  git clone [https://github.com/Mert-Cay/react-contact-manager.git](https://github.com/Mert-Cay/react-contact-manager.git)

2.Proje dizinine girin:
  cd reponun-adi

3.Gerekli paketleri yükleyin:
  npm install

4.Geliştirme sunucusunu başlatın: 
  npm run dev
