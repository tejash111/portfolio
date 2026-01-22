'use client';

import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export function GithubTracker() {
  return (
    <section className="relative w-full bg-[#fbfbfa] px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
         

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="relative rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="w-full">
                <GitHubCalendar 
                  username="tejash111"
                  blockSize={10}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="light"
                  style={{
                    color: 'rgb(107, 114, 128)',
                    width: '100%',
                  }}
                  theme={{
                     light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  }}
                />
              </div>
            </div>
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  );
}
