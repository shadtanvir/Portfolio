import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center font-poppins">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-12 text-accent"
        >
          Let’s Connect
        </motion.h2>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
        >
          {/* Email */}
          <div className="group bg-base-200 backdrop-blur-md border border-base-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full text-white group-hover:scale-110 transition-transform">
                <Mail size={26} />
              </div>
              <h3 className="text-lg font-semibold text-accent">Email</h3>
              <a
                href="mailto:tahmedshad127@gmail.com"
                className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent hover:underline"
              >
                tahmedshad127@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-base-200 backdrop-blur-md border border-base-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white group-hover:scale-110 transition-transform">
                <Phone size={26} />
              </div>
              <h3 className="text-lg font-semibold text-primary">Phone</h3>
              <p className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                +880 1751038180
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group bg-base-200 backdrop-blur-md border border-base-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white group-hover:scale-110 transition-transform">
                <MessageSquare size={26} />
              </div>
              <h3 className="text-lg font-semibold text-primary">WhatsApp</h3>
              <a
                href="https://wa.me/+8801751038180"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
