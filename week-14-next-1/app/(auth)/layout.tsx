export default function ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="border-b p-1 text-center">
                20 % off for next 2 days ( Special place we can add banner create layout )
            </div>
            {children}
        </>
    )
}