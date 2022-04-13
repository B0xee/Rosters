def teams(inp,time):
    for i in range(0,len(inp)):
        team = []
        for o in range(0,len(time)):
            staff = str(wks.acell(inp[i] + time[o]).value)
            staff = staff.split(" ")
            team.append(staff)
        week.append(team)
    return week

# retrieve morning team
team_for_day = teams(input_array,days_array) # assigns the team for the day to this variable
print(team_for_day)