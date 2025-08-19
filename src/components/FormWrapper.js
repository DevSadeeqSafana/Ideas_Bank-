import { motion } from 'framer-motion';

export default function FormWrapper({ children, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-600">{title}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      {children}
    </motion.div>
  );
}