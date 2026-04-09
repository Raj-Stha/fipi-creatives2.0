"use client";

import Link from "next/link";
import { PRIMARY } from "@/data/services";

export default function PackageComparison({ service }) {
  const features = service.comparisonFeatures || [];

  return (
    <div className="mt-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
          Feature Matrix
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Compare Packages</h2>
        <p className="text-gray-500 mt-3 text-lg">Find the perfect balance of features and value for your business</p>
      </div>

      <div className="overflow-x-auto pb-8">
        <table className="w-full text-left border-separate border-spacing-0 min-w-[900px]">
          <thead>
            <tr>
              <th className="py-6 px-6 bg-white rounded-tl-3xl border-b border-r border-gray-100 w-1/4 sticky left-0 z-10 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-2">Service Breakdown</span>
                <div className="h-1 w-12 rounded-full" style={{ backgroundColor: PRIMARY }}></div>
              </th>
              {service.packages.map((pkg, idx) => {
                const isPremium = pkg.category === "premium" || pkg.badge?.toLowerCase().includes("premium");
                return (
                  <th 
                    key={pkg.slug} 
                    className={`py-8 px-8 text-center border-b border-gray-100 relative transition-all duration-300 ${
                      idx === service.packages.length - 1 ? "rounded-tr-3xl" : "border-r"
                    } ${isPremium ? "bg-purple-50/30" : "bg-white"}`}
                  >
                    {isPremium && (
                      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: PRIMARY }}></div>
                    )}
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full inline-block" 
                         style={{ backgroundColor: pkg.badgeColor + "15", color: pkg.badgeColor || PRIMARY }}>
                      {pkg.badge}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                      <span className="text-xs text-gray-400 font-medium">{pkg.priceNote}</span>
                    </div>
                    
                    {isPremium && (
                      <div className="mt-4">
                         <span className="text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-md uppercase">Best Value</span>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white">
            {features.map((feat) => (
              <FeatureRow 
                key={feat.label}
                label={feat.label} 
                packages={service.packages} 
                keyword={feat.keyword} 
                icon={feat.icon} 
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-6 px-6 border-t border-gray-100 bg-white rounded-bl-3xl sticky left-0 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]"></td>
              {service.packages.map((pkg, idx) => (
                <td 
                  key={pkg.slug} 
                  className={`py-6 px-8 border-t border-gray-100 text-center ${
                    idx === service.packages.length - 1 ? "rounded-br-3xl" : "border-r"
                  } ${pkg.category === "premium" ? "bg-purple-50/10" : "bg-white"}`}
                >
                  <Link
                    href={`/services/${service.slug}/${pkg.slug}`}
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.03]"
                    style={{ 
                      backgroundColor: pkg.category === "premium" ? PRIMARY : "#f3f4f6",
                      color: pkg.category === "premium" ? "#fff" : "#374151"
                    }}
                  >
                    View Details
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function FeatureRow({ label, packages, keyword, icon }) {
  // Find a representative feature string from the first package that actually has it
  const matcher = (f) => {
    const lowerF = f.toLowerCase();
    return keyword.toLowerCase().split(' ').every(word => lowerF.includes(word));
  };

  const representativeFeature = packages.find(p => p.features.find(matcher))?.features.find(matcher);

  return (
    <tr className="group hover:bg-gray-50/50 transition-colors">
      <td className="py-3 px-6 border-b border-r border-gray-50 font-semibold text-gray-800 sticky left-0 z-10 bg-white group-hover:bg-gray-50/50 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-sm">{label}</span>
        </div>
      </td>
      {packages.map((pkg, idx) => {
        const feature = pkg.features.find(matcher);
        const isPremium = pkg.category === "premium" || pkg.badge?.toLowerCase().includes("premium");
        
        return (
          <td 
            key={pkg.slug} 
            className={`py-3 px-4 border-b border-gray-50 text-center text-[13px] transition-all duration-300 ${
              idx !== packages.length - 1 ? "border-r" : ""
            } ${isPremium ? "bg-purple-50/30" : ""}`}
          >
            <div className="flex justify-center w-full">
              <div className="w-full max-w-[200px] text-left">
                {feature ? (
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-gray-900 font-bold tracking-tight leading-tight">{feature}</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5 opacity-40">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-[8px] font-bold">✕</span>
                    <span className="text-gray-500 font-medium line-through decoration-red-300 leading-tight">
                      {representativeFeature || label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </td>
        );
      })}
    </tr>
  );
}
