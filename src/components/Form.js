import React, { useState } from "react";
import axios from "axios";
import Logo from "./logo.png";
import "../components/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    faolyati: "",
    xizmatTuri: "web",
    phoneNumber: "",
    telegramUser: "",
    agreement: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = "7265057778:AAG81dEM1y02yKf7mQdKFJ_CTvku1VxnM5A"; 
    const chatId = "5513688979";
    const text = `
      New contact form submission:
      Kompaniya nomi: ${formData.companyName}
      Faoliyat turi: ${formData.faolyati}
      Xizmat turi: ${formData.xizmatTuri}
      Telefon raqami: ${formData.phoneNumber}
      Telegram User: ${formData.telegramUser}
      Agreed to Privacy Policy: ${formData.agreement}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
      });
      setMessage("Bizga ishonch bildirganningiz uchun minnatdormiz.Tez orada siz bilan aloqaga chiqamiz."); 
      setFormData({
        companyName: "",
        faolyati: "",
        xizmatTuri: "web",
        phoneNumber: "",
        telegramUser: "",
        agreement: false,
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Your Company" src={Logo} className="mx-auto h-10 w-auto" />
        {message ? (
          <div className="mt-5 p-4 bg-purple-100 text-purple-900 border border-purple-200 rounded-md text-center">
            {message}
          </div>
        ) : (
          <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Iltimos, siz bilan bog'lanishimiz uchun quyidagi formani to'ldiring.
            </h2>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                    Kompaniyangiz nomini kiriting
                  </label>
                  <div className="mt-2">
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Limsa"
                      required
                      autoComplete="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="faolyati" className="block text-sm font-medium leading-6 text-gray-900">
                    Kompaniyangiz qaysi yo'nalishda faoliyat yuritadi?
                  </label>
                  <div className="mt-2">
                    <input
                      id="faolyati"
                      name="faolyati"
                      type="text"
                      required
                      placeholder="IT"
                      value={formData.faolyati}
                      onChange={handleChange}
                      autoComplete="faolyati"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="xizmatTuri" className="block text-sm font-medium leading-6 text-gray-900">
                    Bizning qaysi turdagi xizmatimizdan foydalanmoqchisiz?
                  </label>
                  <div className="mt-2">
                    <select
                      id="xizmatTuri"
                      name="xizmatTuri"
                      value={formData.xizmatTuri}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="web">Web sayt yaratish</option>
                      <option value="olayin">Onlayn do'kon yaratish</option>
                      <option value="seo">SEO</option>
                      <option value="bot">Telegram bot yaratish</option>
                      <option value="logo">Brend uchun logo xizmati</option>
                      <option value="dizayn">Web dizayn yaratish</option>
                      <option value="boshqa">Boshqa...</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                    Telefon raqami
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="+998330772077"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      autoComplete="phoneNumber"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telegramUser" className="block text-sm font-medium leading-6 text-gray-900">
                    Telegram foydalanuvchi nomi
                  </label>
                  <div className="mt-2">
                    <input
                      id="telegramUser"
                      name="telegramUser"
                      type="text"
                      required
                      placeholder="@Limsa"
                      value={formData.telegramUser}
                      onChange={handleChange}
                      autoComplete="telegramUser"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>

      {message ? null : (
        <p className="mt-5 text-center text-sm text-gray-500 massg">
          Barcha ma'lumotlar!{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sir saqlanadi.
          </a>
        </p>
      )}
    </div>
  );
};

export default Form;
