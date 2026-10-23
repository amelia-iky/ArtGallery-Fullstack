import axios from 'axios';

const BASE_URL = 'https://artgallery-fullstack.onrender.com';

// Register User
export const registerUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/auth/register`, data);
  return res;
};

// Login User
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// Ambil daftar karya seni
export const getKaryaList = async () => {
  const res = await fetch(`${BASE_URL}/api/karya_seni`);
  return res.json();
};

// Tambah karya seni
export const tambahKarya = async (formData, token) => {
  const res = await fetch(`${BASE_URL}/api/karya_seni`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return res.json();
};

// Like karya seni
export const likeKarya = async (id) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`${BASE_URL}/api/karya_seni/${id}/like`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Gagal like karya');
  }

  const data = await res.json();
  return data.like_count;
};

// Unlike karya seni
export const unlikeKarya = async (id) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`${BASE_URL}/api/karya_seni/${id}/unlike`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Gagal unlike karya');
  }

  const data = await res.json();
  return data.like_count;
};

// Ambil data user berdasarkan username
export const getUserByUsername = async (username) => {
  const res = await fetch(
    `${BASE_URL}/api/users/username/${encodeURIComponent(username)}`,
  );

  if (!res.ok) {
    throw new Error('User tidak ditemukan');
  }

  return res.json();
};

// Ambil detail user berdasarkan ID
export const getUserDetailById = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/users/${userId}/detail`);

  if (!res.ok) {
    throw new Error('Gagal ambil detail user');
  }

  return res.json();
};

// Ambil karya terbaru
export const getKaryaTerbaru = async () => {
  const res = await axios.get(`${BASE_URL}/api/karya_seni/beranda`);
  return res.data;
};

// Ambil video terbaru
export const getVideoTerbaru = async () => {
  const res = await fetch(`${BASE_URL}/api/ruang_video/beranda`);
  return res.json();
};
