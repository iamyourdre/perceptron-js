import SampleModel from "../models/SampleModel.js";

// Dapatkan semua data sample
export const getSample = async (req, res) => {
  try {
    const response = await SampleModel.findAll(); // Execute SELECT * FROM sample query using the SampleModel model
    res.status(200).json(response); // Kirim respons dengan kode status 200 dan data sample yang ditemukan
  } catch (error) {
    console.log(error.message);
  }
};

// Dapatkan data sample berdasarkan ID
export const getSampleById = async (req, res) => {
  try {
    const response = await SampleModel.findOne({
      where: {
        id: req.params.id, // Execute SELECT * FROM sample WHERE id = :id query using the SampleModel model
      },
    });
    res.status(200).json(response); // Kirim respons dengan kode status 200 dan data sample yang ditemukan
  } catch (error) {
    console.log(error.message);
  }
};

// Buat data sample baru
export const createSample = async (req, res) => {
  try {
    await SampleModel.create(req.body); // Buat entitas data sample baru menggunakan model SampleModel
    res.status(201).json({
      msg: "Data Sample Created!", // Kirim respons dengan kode status 201 dan pesan sukses
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Perbarui data sample berdasarkan ID
export const updateSample = async (req, res) => {
  try {
    await SampleModel.update(req.body, {
      where: {
        id: req.params.id, // Execute UPDATE sample SET ... WHERE id = :id query using the SampleModel model
      },
    });
    res.status(200).json({
      msg: "Data Sample Updated!", // Kirim respons dengan kode status 200 dan pesan sukses
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Hapus data sample berdasarkan ID
export const deleteSample = async (req, res) => {
  try {
    await SampleModel.destroy({
      where: {
        id: req.params.id, // Execute DELETE FROM sample WHERE id = :id query using the SampleModel model
      },
    });
    res.status(200).json({
      msg: "Data Sample Deleted!", // Kirim respons dengan kode status 200 dan pesan sukses
    });
  } catch (error) {
    console.log(error.message);
  }
};
