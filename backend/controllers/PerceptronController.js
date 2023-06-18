import Perceptron from "../models/PerceptronModel.js";
import Sample from "../models/SampleModel.js";

export const runPerceptron = async (req, res) => {
  let old = {
    iteration: 0,
    x1: 0,
    x2: 0,
    v: 0,
    outerY: 0,
    Y: 0,
    error: 0,
    new_w1: -1.8,
    new_w2: 2.9,
    delta_w1: 0,
    delta_w2: 0,
  };
  let errorEpoch = 1; // Menetapkan error default agar iterasi epoch berjalan minimal 1 kali
  const learning_rate = 0.9;
  const threshold = 0;
  let iteration = 1;

  try {
    const response = await Sample.findAll();
    while(errorEpoch > 0){ // Jika errorEpoch = 0, maka iterasi berhenti

      errorEpoch = 0; // Menetapkan error default untuk tiap epoch

      for (const s of response) {

        const v = s.harta * old.new_w1 + s.utang * old.new_w2;
        const outerY = v < threshold ? 0 : 1;
        const targetY = s.status === "Tidak Bangkrut" ? 1 : 0;
        const error = targetY - outerY;
        const new_w1 = old.new_w1 + learning_rate * error * s.harta;
        const new_w2 = old.new_w2 + learning_rate * error * s.utang;
        const delta_w1 = new_w1 - old.new_w1;
        const delta_w2 = new_w2 - old.new_w2;

        // Jika terdapat error pada data, maka ubah nilai errorEpoch
        if(error !== 0){
          errorEpoch++
        }
  
        const newSample = {
          iteration: iteration,
          x1: s.harta,
          x2: s.utang,
          v,
          outerY,
          Y: targetY,
          error,
          new_w1,
          new_w2,
          delta_w1,
          delta_w2,
        };
        await Perceptron.create(newSample);
        old = newSample;

      }

      iteration++;
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};








// Dapatkan semua data perceptron
export const getPerceptron = async (req, res) => {
  try {
    const response = await Perceptron.findAll(); // Execute SELECT * FROM perceptron query using the Perceptron model
    res.status(200).json(response); // Kirim respons dengan kode status 200 dan data perceptron yang ditemukan
  } catch (error) {
    console.log(error.message);
  }
};
