import { SearchOutlined } from "@ant-design/icons";

export default function NotFound() {
  return (
    <main className="min-h-screen flex justify-center flex-col items-center">
      <div className=" bg-[#97987e7e] shadow-2xl flex flex-col items-center rounded-lg p-10">
        <h1 className="font-bold flex gap-2 ">
          <SearchOutlined/>
          404 : Not Found
        </h1>
        <p>O recurso que você tentou acessar não está disponivel!</p>
      </div>
    </main>
  )
}
