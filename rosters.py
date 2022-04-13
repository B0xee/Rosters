import gspread
# initialise service account and sheets
service_acc = gspread.service_account(r'C:\Users\Henry\Documents\Projects\Projects\%APPDATA%\gspread\service_account.json')         # Put in the whole directory lmao
sheet = service_acc.open("Rosters_Auto")

wks = sheet.worksheet("AutoFill Template")

# format - row,col
# function to retrieve data from excel to list of strings in python
def convert(excel):
    new_list = []
    for i in range(0,len(excel)):
        formatted = str(excel[i])
        formatted = formatted.replace("[","")
        formatted = formatted.replace("'","")
        formatted = formatted.replace("]","")
        new_list.append(formatted)
    return new_list
# Retrieve all managers
managers_excel = list(wks.get('A3:A9'))
manager_list = convert(managers_excel)
# Retrieve all boh
staff_excel = list(wks.get('A10:A27'))
staff_list = convert(staff_excel)
workers = list(wks.get('A3:A27'))
worker_list = convert(workers)

# Initialise arrays for input looping
input_array = ['B','C','D','E','F','G','H']

# shifts
#boh_morn = range(31,33)
#foh_morn = range(35,37)
#boh_close = range(39,41)
#foh_close = range(43,45)

days_array = ['31','32','33','35','36','37','39','40','41','43','44','45']
boh_orders = ['31','39']
foh_orders = ['35','43']
# retrieving morning team
def teams(inp,time):
    team = []
    for o in range(0,len(time)):
        staff = str(wks.acell(inp + time[o]).value)
        staff = staff.split(" ")
        if "".join(staff) == "None":
            pass
        else:
            team.append(staff)
    return team

# retrieve teams by the day
    # 0-2 boh morn
    # 3-5 foh morn
    # 6-8 boh close
    # 9-11 foh close
mon = teams(input_array[0],days_array)
# Take the name and search for it's index in column 1 to fill in 
for i in range(0,len(mon)):
    staff = mon[i]
    name = staff[0]
    shift = staff[1]
    for o in range(0,len(worker_list)):
        if name in worker_list[o]:
            print(o)                # Retrieve the index the person appears in - should always return a value
            break
