<html>
    <body>
        <script>
            var body = document.getElementsByTagName("BODY").item(0);
            var table = document.createElement("table");
            var tablebody = document.createElement("tbody");
            var r = document.createElement("tr");
            var r2 = document.createElement("tr");

            var p = document.createElement("td");
            p.innerHTML = "Bakit";
            var p2 = document.createElement("td");
            p2.innerHTML = "Ako";
            var p3 = document.createElement("td");
            p3.innerHTML = "Maganda";
            var p4 = document.createElement("td");
            p4.innerHTML = "HA HA";

            r.appendChild(p);
            r.appendChild(p2);
            r2.appendChild(p3);
            r2.appendChild(p4);
            tablebody.appendChild(r);
            tablebody.appendChild(r2);
            tablebody.appendChild(tablebody);
            table.setAttribute("border","4");
            body.appendChild(table);

        </script>
    </body>
</html>