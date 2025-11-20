import { useState } from "react";
import AppImage from "../assets/app.png";
import { Segmented } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { MoveUpRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [os, setOs] = useState("ios");
  return (
    <div className="w-full min-h-screen flex-col bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white flex items-center justify-start px-8 py-20">
      <div className="text-xl md:text-4xl text-center pb-8">
        Та хөрөнгө оруулалтын захиалгаа Apex Traders аппаар хийх боломжтой.
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex  justify-center">
          <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-2xl w-72 h-[550px] bg-black">
            <img
              src={AppImage}
              alt="App preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex space-x-4">
            <Segmented
              value={os}
              onChange={(value) => setOs(value)}
              shape="round"
              size="large"
              options={[
                { value: "ios", icon: <AppleOutlined /> },
                { value: "android", icon: <AndroidOutlined /> },
              ]}
              style={{ backgroundColor: "rgba(15, 23, 42, 0.9)" }}
            />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight">
            Apex Traders
            <br />
            <p className="text-lg">Хувьцаа бонд арилжааны цогц платформ</p>
          </h1>

          {os === "ios" ? (
            <div className="flex cursor-pointer items-center justify-center bg-slate-900/90 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-50 transition text-lg font-semibold">
              <span>Download on the App Store</span>
              <MoveUpRight />
            </div>
          ) : (
            <div className="flex cursor-pointer items-center justify-center bg-slate-900/90 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-50 transition text-lg font-semibold">
              <span>Download on the Google Play</span>
              <MoveUpRight />
            </div>
          )}
        </div>
      </div>
      <footer className="w-full mt-16 border-t border-gray-700 py-10 text-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Apex Capital</h2>

            <div className="flex items-center space-x-3">
              <Phone size={20} />
              <span>+976 7510-7500</span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail size={20} />
              <span>info@apex.mn</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin size={20} />
              <span>Сүхбаатар дүүрэг, Улаанбаатар</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Apex Securities
            </h2>

            <div className="flex items-center space-x-3">
              <Phone size={20} />
              <span>+976 7277-8282</span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail size={20} />
              <span>info@omnicapital.mn</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin size={20} />
              <span>Сүхбаатар дүүрэг, Улаанбаатар</span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 pt-16">
          © {new Date().getFullYear()} Omni Asset II. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
