'use client'
import ProviderTema from "../provider/ProviderTema";

export default function  NameLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <ProviderTema>
            {children}
      </ProviderTema>
    
    </div>
  );
}